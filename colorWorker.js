// Web Worker 中的颜色生成
let colorGenerator = null;

self.onmessage = function(e) {
    if (e.data.type === 'start') {
        colorGenerator = generateLargeColorSet();
        generateNextBatch();
    } else if (e.data.type === 'nextBatch') {
        generateNextBatch();
    }
};

function generateNextBatch() {
    if (!colorGenerator) return;
    
    const {colors, done} = colorGenerator.generateBatch();
    self.postMessage({
        type: 'batch',
        colors,
        done
    });
}

// 颜色生成函数
function generateLargeColorSet() {
    const totalColors = 100000;
    const step = Math.ceil(Math.pow(totalColors, 1/3)); // 计算步长

    // 使用生成器函数分批生成颜色
    function* colorGenerator() {
        for (let r = 0; r <= 255; r += step) {
            for (let g = 0; g <= 255; g += step) {
                for (let b = 0; b <= 255; b += step) {
                    yield {r, g, b};
                }
            }
        }
    }

    const generator = colorGenerator();
    let count = 0;
    const batchSize = 1000;
    
    return {
        generateBatch() {
            const batch = [];
            for (let i = 0; i < batchSize && count < totalColors; i++) {
                const {value, done} = generator.next();
                if (done) break;
                
                const {r, g, b} = value;
                const rgb = `rgb(${r},${g},${b})`;
                const name = getColorName(r, g, b);
                batch.push({
                    name,
                    code: rgb,
                    system: 'system',
                    description: `R:${r} G:${g} B:${b}`,
                    tooltip: `RGB颜色\n${name}\n${rgb}`
                });
                count++;
            }
            return {
                colors: batch,
                done: count >= totalColors
            };
        }
    };
}

// 智能颜色命名函数
function getColorName(r, g, b) {
    // 计算色相、饱和度、亮度
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    let h, s, l = (max + min) / 510;

    if (d === 0) h = 0;
    else if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;

    h = Math.round(h * 60);
    if (h < 0) h += 360;
    
    s = max === 0 ? 0 : d / max;

    // 基于 HSL 值确定颜色名称
    let name = '';
    
    // 确定基础颜色名称
    if (h >= 0 && h < 30) name = '红';
    else if (h < 60) name = '橙';
    else if (h < 90) name = '黄';
    else if (h < 150) name = '绿';
    else if (h < 210) name = '青';
    else if (h < 270) name = '蓝';
    else if (h < 330) name = '紫';
    else name = '红';

    // 添加深浅程度
    if (l < 0.2) name = '深' + name;
    else if (l > 0.8) name = '浅' + name;
    
    // 添加饱和度描述
    if (s < 0.2) name = '灰' + name;
    else if (s > 0.8) name += '色';

    return name + '系';
}