import { basicColorList as basicColorsBase, generateBasicGradients } from '/colors/basicColors.js';
import { webColorList as webColorsBase, generateWebGradients } from '/colors/webColors.js';
import { traditionalColorList as traditionalColorsBase, generateTraditionalGradients } from '/colors/traditionalColors.js';
import { generateUniqueGradients } from './colors/gradientGenerator.js';

// 基础色卡数据
let basicColors = [
    { name: '纯白', code: '#FFFFFF', system: 'basic', description: '纯白色', tooltip: '这是一个纯白色', independent: true },
    { name: '乳白', code: '#FFFDD0', system: 'basic', description: '温暖的白色', tooltip: '这是一个乳白色' },
    { name: '米白', code: '#F5F5DC', system: 'basic', description: '带有淡黄的白色', tooltip: '这是一个米白色' },
    { name: '象牙白', code: '#FFFFF0', system: 'basic', description: '温和的白色', tooltip: '这是一个象牙白色' },
    { name: '雪白', code: '#F0FFF0', system: 'basic', description: '清澈的白色', tooltip: '这是一个雪白色' },
    { name: '珍珠白', code: '#F8F8FF', system: 'basic', description: '带有光泽的白色', tooltip: '这是一个珍珠白色' },
    { name: '纯黑', code: '#000000', system: 'basic', description: '纯黑色', tooltip: '这是一个纯黑色' },
    { name: '纯红', code: '#FF0000', system: 'basic', description: '纯红色', tooltip: '这是一个纯红色' },
    { name: '纯绿', code: '#00FF00', system: 'basic', description: '纯绿色', tooltip: '这是一个纯绿色' },
    { name: '纯蓝', code: '#0000FF', system: 'basic', description: '纯蓝色', tooltip: '这是一个纯蓝色' },
    { name: '纯黄', code: '#FFFF00', system: 'basic', description: '纯黄色', tooltip: '这是一个纯黄色' },
    { name: '青色', code: '#00FFFF', system: 'basic', description: '青色', tooltip: '这是一个青色' },
    { name: '洋红', code: '#FF00FF', system: 'basic', description: '洋红色', tooltip: '这是一个洋红色' },
    { name: '深红', code: '#8B0000', system: 'basic', description: '深红色', tooltip: '这是一个深红色' },
    { name: '深绿', code: '#006400', system: 'basic', description: '深绿色', tooltip: '这是一个深绿色' },
    { name: '深蓝', code: '#00008B', system: 'basic', description: '深蓝色', tooltip: '这是一个深蓝色' },
    { name: '橙色', code: '#FFA500', system: 'basic', description: '橙色', tooltip: '这是一个橙色' },
    { name: '紫色', code: '#800080', system: 'basic', description: '紫色', tooltip: '这是一个紫色' },
    { name: '棕色', code: '#A52A2A', system: 'basic', description: '棕色', tooltip: '这是一个棕色' },
    { name: '灰色', code: '#808080', system: 'basic', description: '灰色', tooltip: '这是一个灰色' }
];

// 网页安全色
let webColors = [
    { name: '栗色', code: '#800000', system: 'web', description: '深红色', tooltip: '这是一个栗色' },
    { name: '橄榄色', code: '#808000', system: 'web', description: '深黄色', tooltip: '这是一个橄榄色' },
    { name: '海军蓝', code: '#000080', system: 'web', description: '深蓝色', tooltip: '这是一个海军蓝' },
    { name: '紫色', code: '#800080', system: 'web', description: '紫色', tooltip: '这是一个紫色' },
    { name: '水鸭色', code: '#008080', system: 'web', description: '青绿色', tooltip: '这是一个水鸭色' },
    { name: '绿色', code: '#008000', system: 'web', description: '深绿色', tooltip: '这是一个绿色' },
    { name: '银色', code: '#C0C0C0', system: 'web', description: '银灰色', tooltip: '这是一个银色' },
    { name: '灰色', code: '#808080', system: 'web', description: '中灰色', tooltip: '这是一个灰色' },
    { name: '红色', code: '#FF0000', system: 'web', description: '纯红色', tooltip: '这是一个红色' },
    { name: '青柠色', code: '#00FF00', system: 'web', description: '亮绿色', tooltip: '这是一个青柠色' },
    { name: '蓝色', code: '#0000FF', system: 'web', description: '纯蓝色', tooltip: '这是一个蓝色' },
    { name: '黄色', code: '#FFFF00', system: 'web', description: '纯黄色', tooltip: '这是一个黄色' },
    { name: '青色', code: '#00FFFF', system: 'web', description: '浅蓝色', tooltip: '这是一个青色' },
    { name: '品红', code: '#FF00FF', system: 'web', description: '洋红色', tooltip: '这是一个品红' }
];

// 中国传统色
let traditionalColors = [
    // 粉色系
    { name: '粉红', code: '#FFB3B3', system: 'traditional', description: '淡淡的粉红色', tooltip: '这是一个粉红' },
    { name: '桃红', code: '#F47983', system: 'traditional', description: '淡雅的红色', tooltip: '这是一个桃红' },
    { name: '水红', code: '#F3D3E7', system: 'traditional', description: '淡粉色', tooltip: '这是一个水红' },
    { name: '藕荷色', code: '#E4C6D0', system: 'traditional', description: '淡雅的粉紫色', tooltip: '这是一个藕荷色' },
    { name: '藕', code: '#EDD1D8', system: 'traditional', description: '浅粉色', tooltip: '这是一个藕色' },
    { name: '淡粉', code: '#FFE4E1', system: 'traditional', description: '非常浅粉', tooltip: '这是一个淡粉' },
    { name: '浅粉', code: '#FFF0F5', system: 'traditional', description: '极浅的粉色', tooltip: '这是一个浅粉' },
    { name: '樱花', code: '#FFB7C5', system: 'traditional', description: '樱花的粉色', tooltip: '这是一个樱花粉' },
    { name: '浅桃红', code: '#FFB6C1', system: 'traditional', description: '浅淡的桃红色', tooltip: '这是一个浅桃红' },
    { name: '珊瑚粉', code: '#FF9999', system: 'traditional', description: '珊瑚的粉色', tooltip: '这是一个珊瑚粉' },
    { name: '草莓粉', code: '#FFB5B5', system: 'traditional', description: '草莓的粉色', tooltip: '这是一个草莓粉' },
    { name: '蜜桃粉', code: '#FFDDDD', system: 'traditional', description: '蜜桃的粉色', tooltip: '这是一个蜜桃粉' },
    
    // 其他红色系
    { name: '妃红', code: '#FF2D51', system: 'traditional', description: '鲜艳的红色', tooltip: '这是一个妃红' },
    { name: '品红', code: '#F00056', system: 'traditional', description: '鲜艳的红色', tooltip: '这是一个品红' },
    { name: '海棠红', code: '#DB5A6B', system: 'traditional', description: '深红色', tooltip: '这是一个海棠红' },
    { name: '玫瑰红', code: '#FF3333', system: 'traditional', description: '鲜艳的红色', tooltip: '这是一个玫瑰红' },
    
    // 他颜色保持不变
    { name: '青莲', code: '#8B4C8C', system: 'traditional', description: '紫色', tooltip: '这是一个青莲' },
    { name: '群青', code: '#4C8DAE', system: 'traditional', description: '蓝色', tooltip: '这是一个群青' },
    { name: '靛青', code: '#1661AB', system: 'traditional', description: '深蓝色', tooltip: '这是一个靛青' },
    { name: '靛蓝', code: '#065279', system: 'traditional', description: '深蓝色', tooltip: '这是一个靛蓝' },
    { name: '花青', code: '#2E4E7E', system: 'traditional', description: '深蓝色', tooltip: '这是一个花青' },
    { name: '松花色', code: '#BCE672', system: 'traditional', description: '黄绿色', tooltip: '这是一个松花色' },
    { name: '松绿', code: '#057748', system: 'traditional', description: '深绿色', tooltip: '这是一个松绿' },
    { name: '竹青', code: '#789262', system: 'traditional', description: '青绿色', tooltip: '这是一个竹青' },
    { name: '墨绿', code: '#1A3B32', system: 'traditional', description: '深绿色', tooltip: '这是一个墨绿' },
    { name: '黛绿', code: '#426666', system: 'traditional', description: '深绿色', tooltip: '这是一个黛绿' },
    { name: '黄栌', code: '#E9BB1D', system: 'traditional', description: '金黄色', tooltip: '这是一个黄栌' },
    { name: '秋香色', code: '#D4C4B7', system: 'traditional', description: '浅褐色', tooltip: '这是一个秋香色' },
    { name: '琥珀', code: '#CA6924', system: 'traditional', description: '棕红色', tooltip: '这是一个琥珀' },
    { name: '茶色', code: '#B35C44', system: 'traditional', description: '褐色', tooltip: '这是一个茶色' },
    { name: '驼色', code: '#A88462', system: 'traditional', description: '褐色', tooltip: '这是一个驼色' }
];

// 扩展中国传统色系
let extendedTraditionalColors = [
    // 青色系
    { name: '青冥', code: '#122C63', system: 'traditional', description: '深沉的蓝色', tooltip: '这是一个青冥' },
    { name: '青雘', code: '#0F59A4', system: 'traditional', description: '明亮的蓝色', tooltip: '这是一个青雘' },
    { name: '青霄', code: '#1661AB', system: 'traditional', description: '天空般的蓝色', tooltip: '这是一个青霄' },
    // 绿色系
    { name: '碧山', code: '#0AA344', system: 'traditional', description: '翠绿的山色', tooltip: '这是一个碧山' },
    { name: '碧潭', code: '#248067', system: 'traditional', description: '潭��的绿色', tooltip: '这是一个碧潭' },
    { name: '碧玉', code: '#1A6840', system: 'traditional', description: '玉石的绿色', tooltip: '这是一个碧玉' },
    // 红色系
    { name: '绛紫', code: '#8C4356', system: 'traditional', description: '深红色', tooltip: '这是一个绛紫' },
    { name: '绯红', code: '#C02C38', system: 'traditional', description: '鲜艳的红色', tooltip: '这是一个绯红' },
    { name: '茜色', code: '#CB3A56', system: 'traditional', description: '茜草染的红色', tooltip: '这是一个茜色' },
    // 黄色系
    { name: '缃色', code: '#F0C239', system: 'traditional', description: '浅黄色', tooltip: '这是一个缃色' },
    { name: '姜黄', code: '#FFA631', system: 'traditional', description: '姜根的黄色', tooltip: '这是一个姜黄' },
    { name: '璨黄', code: '#F7C430', system: 'traditional', description: '明亮的黄色', tooltip: '这是一个璨黄' }
];

// CMYK色卡
const cmykColors = [
    // 红色系
    { name: 'CMYK红100', code: '#FF0000', system: 'cmyk', description: 'C:0 M:100 Y:100 K:0', tooltip: '这是一个CMYK红色' },
    { name: 'CMYK红80', code: '#CC0000', system: 'cmyk', description: 'C:0 M:80 Y:80 K:20', tooltip: '这是一个CMYK红色' },
    { name: 'CMYK红60', code: '#990000', system: 'cmyk', description: 'C:0 M:60 Y:60 K:40', tooltip: '这是一个CMYK红色' },
    // 蓝色系
    { name: 'CMYK蓝100', code: '#0000FF', system: 'cmyk', description: 'C:100 M:100 Y:0 K:0', tooltip: '这是一个CMYK蓝色' },
    { name: 'CMYK蓝80', code: '#0000CC', system: 'cmyk', description: 'C:80 M:80 Y:0 K:20', tooltip: '这是一个CMYK蓝色' },
    { name: 'CMYK蓝60', code: '#000099', system: 'cmyk', description: 'C:60 M:60 Y:0 K:40', tooltip: '这是一个CMYK蓝色' },
    // 黄色
    { name: 'CMYK黄100', code: '#FFFF00', system: 'cmyk', description: 'C:0 M:0 Y:100 K:0', tooltip: '这是一个CMYK黄色' },
    { name: 'CMYK黄80', code: '#CCCC00', system: 'cmyk', description: 'C:0 M:0 Y:80 K:20', tooltip: '这是一个CMYK黄色' },
    { name: 'CMYK黄60', code: '#999900', system: 'cmyk', description: 'C:0 M:0 Y:60 K:40', tooltip: '这是一个CMYK黄色' }
];

// 修改 CMYK颜色命名函数
function getCMYKColorName(c, m, y, k) {
    // 计算颜色的主要成分
    const components = [
        { value: c, name: '青色', key: 'c' },
        { value: m, name: '品红', key: 'm' },
        { value: y, name: '黄色', key: 'y' }
    ].filter(comp => comp.value > 0)
     .sort((a, b) => b.value - a.value);

    // 如果是纯灰色（CMY都为0，只有K）
    if (components.length === 0) {
        if (k === 0) return '纯白色';
        if (k === 100) return '纯黑色';
        if (k > 75) return '深灰色';
        if (k > 50) return '中灰色';
        if (k > 25) return '浅灰色';
        return '淡灰色';
    }

    // 获取主色调
    const mainColor = components[0];
    let name = '';

    // 根据K值确定深浅
    if (k > 0) {
        if (k > 75) name = '深';
        else if (k > 50) name = '暗';
        else if (k > 25) name = '浅';
        else name = '淡';
    }

    // 添加颜色名称
    name += mainColor.name;

    return name;
}

// 修改 generateLargeColorSet 函数中的 CMYK 部分
function generateLargeColorSet() {
    const colors = [];
    
    // 1. HSL色彩空间 - 生成更细致的色阶
    for (let h = 0; h < 360; h += 5) {  // 色相每5度一个色阶
        for (let s = 10; s <= 100; s += 10) {  // 饱和度每10%一个色阶
            for (let l = 10; l <= 90; l += 10) {  // 亮度每10%一个色阶
                const hslColor = `hsl(${h}, ${s}%, ${l}%)`;
                const colorName = getDetailedColorName(h, s, l);
                colors.push({
                    name: colorName,
                    code: hslColor,
                    system: 'system',
                    description: `色相:${h}° 饱和度:${s}% 明度:${l}%`,
                    tooltip: `HSL颜色\n${colorName}\n${hslColor}`
                });
            }
        }
    }

    // 2. RGB色彩空间 - 生成更多颜色组合
    for (let r = 0; r <= 255; r += 32) {
        for (let g = 0; g <= 255; g += 32) {
            for (let b = 0; b <= 255; b += 32) {
                const rgb = `rgb(${r}, ${g}, ${b})`;
                const colorName = getRGBColorName(r, g, b);
                colors.push({
                    name: colorName,
                    code: rgb,
                    system: 'rgb',
                    description: `红:${r} 绿:${g} 蓝:${b}`,
                    tooltip: `RGB颜色\n${colorName}\n${rgb}`
                });
            }
        }
    }

    // 3. 添加更多的特殊色系
    const specialSystems = [
        { name: '金属', colors: ['金', '银', '铜', '铁', '青铜'] },
        { name: '宝石', colors: ['红宝石', '蓝宝石', '祖母绿', '紫水晶', '黄玉'] },
        { name: '自然', colors: ['天空', '海洋', '森林', '沙漠', '草原'] },
        { name: '食物', colors: ['巧克力', '咖啡', '奶油', '蜂蜜', '薄荷'] },
        { name: '花卉', colors: ['玫瑰', '薰衣草', '向日葵', '紫罗兰', '百合'] }
    ];

    specialSystems.forEach(system => {
        system.colors.forEach((color, index) => {
            for (let i = 1; i <= 5; i++) {
                const hue = (index * 60 + i * 15) % 360;
                const sat = 60 + i * 8;
                const light = 40 + i * 10;
                const hslColor = `hsl(${hue}, ${sat}%, ${light}%)`;
                
                colors.push({
                    name: `${color}色-${i}号`,
                    code: hslColor,
                    system: system.name,
                    description: `${system.name}系列 ${color}色 体${i}`,
                    tooltip: `特殊色系\n${system.name}\n${color}色\n变体${i}`
                });
            }
        });
    });

    // 4. 生成更多渐变组合
    const baseColors = [
        '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', 
        '#00FFFF', '#0000FF', '#8B00FF', '#FF00FF'
    ];
    
    for (let i = 0; i < baseColors.length; i++) {
        for (let j = i + 1; j < baseColors.length; j++) {
            for (let angle = 0; angle <= 315; angle += 45) {
                colors.push({
                    name: `渐变色-${i}-${j}-${angle}°`,
                    code: baseColors[i],
                    gradient: `linear-gradient(${angle}deg, ${baseColors[i]}, ${baseColors[j]})`,
                    system: 'gradient',
                    description: `${angle}度渐变`,
                    tooltip: `渐变色系\n起始色：${baseColors[i]}\n结束色：${baseColors[j]}\n角度：${angle}°`
                });
            }
        }
    }

    return colors;
}

// 添加详细的颜色命名函数
function getDetailedColorName(h, s, l) {
    const hueNames = {
        0: '红', 30: '橙', 60: '黄', 120: '绿',
        180: '青', 210: '蓝', 270: '紫', 300: '粉', 330: '玫��'
    };
    
    // 获取���������接近的色相名称
    const hueKeys = Object.keys(hueNames).map(Number);
    const closestHue = hueKeys.reduce((prev, curr) => 
        Math.abs(curr - h) < Math.abs(prev - h) ? curr : prev
    );
    
    let name = hueNames[closestHue];
    
    // 添加饱和度描述
    if (s < 30) name = '灰' + name;
    else if (s < 60) name = '浅' + name;
    else if (s > 80) name = '深' + name;
    
    // 添加亮度描述
    if (l < 30) name += '暗';
    else if (l > 70) name += '亮';
    
    return name + '色';
}

// 添加RGB颜色命名函数
function getRGBColorName(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    
    let name = '';
    if (r === g && g === b) {
        if (r === 0) return '纯白色';
        if (r === 255) return '纯白色';
        return `${Math.round(r / 2.55)}%灰度`;
    }
    
    if (max === r) name = '红';
    else if (max === g) name = '绿';
    else name = '蓝';
    
    const intensity = Math.round((max / 255) * 100);
    return `${name}色-${intensity}%`;
}

// 添加颜色变体生成函数
function generateColorVariant(baseColor, index) {
    // 将颜色转换为RGB
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);

    // 根据索引生成变体
    const variation = 20 * (index + 1);
    const newR = Math.max(0, Math.min(255, r + (Math.random() - 0.5) * variation));
    const newG = Math.max(0, Math.min(255, g + (Math.random() - 0.5) * variation));
    const newB = Math.max(0, Math.min(255, b + (Math.random() - 0.5) * variation));

    return rgbToHex(Math.round(newR), Math.round(newG), Math.round(newB));
}

// 添加混合色命名函数
function getCMYKMixedName(c, m, y) {
    const components = [];
    if (c > 0) components.push('青');
    if (m > 0) components.push('红');
    if (y > 0) components.push('黄');
    
    if (components.length === 0) return '白色';
    if (components.length === 1) return components[0] + '色';
    
    // 特殊组合命名
    if (c > 0 && m > 0 && y === 0) return '蓝紫色';
    if (c === 0 && m > 0 && y > 0) return '橙红色';
    if (c > 0 && m === 0 && y > 0) return '青绿色';
    
    return components.join('') + '混合色';
}

// 修改 CMYK 到 RGB 的转换函数，确更准确的颜色转换
function cmykToRgb(c, m, y, k) {
    c = c / 100;
    m = m / 100;
    y = y / 100;
    k = k / 100;

    const r = Math.round(255 * (1 - c) * (1 - k));
    const g = Math.round(255 * (1 - m) * (1 - k));
    const b = Math.round(255 * (1 - y) * (1 - k));

    return {
        r: Math.max(0, Math.min(255, r)),
        g: Math.max(0, Math.min(255, g)),
        b: Math.max(0, Math.min(255, b))
    };
}

// 添加 RGB 到 Hex 的转换函数
function rgbToHex(r, g, b) {
    const toHex = (n) => {
        const hex = n.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// 颜色代码译表
const colorTranslations = {
    '#000000': '黑色',
    '#FFFFFF': '白色',
    '#FF0000': '红色',
    '#00FF00': '绿色',
    '#0000FF': '蓝色',
    '#FFFF00': '黄色',
    '#00FFFF': '青色',
    '#FF00FF': '洋红色',
    '#8B0000': '深红色',
    '#006400': '深绿色',
    '#00008B': '蓝色',
    '#FFA500': '橙色',
    '#800080': '紫色',
    '#A52A2A': '棕色',
    '#808080': '灰色'
};

// 添加回 getColorNameFromHSL 函数
function getColorNameFromHSL(h, s, l) {
    let colorName = '';
    
    // 根据色相确定基础颜色
    if (h >= 0 && h < 15 || h >= 345) colorName = '红色';
    else if (h >= 15 && h < 45) colorName = '橙色';
    else if (h >= 45 && h < 75) colorName = '黄色';
    else if (h >= 75 && h < 165) colorName = '绿色';
    else if (h >= 165 && h < 195) colorName = '青色';
    else if (h >= 195 && h < 255) colorName = '蓝色';
    else if (h >= 255 && h < 285) colorName = '紫色';
    else if (h >= 285 && h < 345) colorName = '粉色';
    
    // 根据饱和度和亮度调整描述
    if (s < 30) colorName = '浅' + colorName;
    else if (s < 60) colorName = '浅' + colorName;
    else if (s > 80) colorName = '深' + colorName;
    
    if (l < 30) colorName += '(暗)';
    else if (l > 70) colorName += '(亮)';
    
    return colorName;
}

// 修改 createColorCard 函数，添加点击复制功能
function createColorCard(color) {
    const card = document.createElement('div');
    card.className = 'color-card';
    card.setAttribute('data-system', color.system);
    
    const colorDisplay = document.createElement('div');
    colorDisplay.className = 'color-display';
    
    if (color.gradient) {
        colorDisplay.style.background = color.gradient;
        colorDisplay.addEventListener('click', () => {
            const gradientText = color.gradient;
            copyToClipboard(gradientText);
            showCopyFeedback(color.name, gradientText);
        });
    } else {
        colorDisplay.style.backgroundColor = color.code;
        colorDisplay.addEventListener('click', () => {
            copyToClipboard(color.code);
            showCopyFeedback(color.name, color.code);
        });
    }
    
    // 添加点击波纹效果
    addClickEffect(colorDisplay);
    
    // 添加匹配类型标识
    if (color.matchType) {
        const matchBadge = document.createElement('div');
        matchBadge.className = `match-badge ${color.matchType}`;
        matchBadge.textContent = color.matchType === 'direct' ? '直接匹配' : '相似色';
        colorDisplay.appendChild(matchBadge);
    }
    
    colorDisplay.setAttribute('data-tooltip', `${color.name}\n${color.description}\n点击复制颜色代码`);
    
    const colorInfo = document.createElement('div');
    colorInfo.className = 'color-info';
    
    const colorName = document.createElement('div');
    colorName.className = 'color-name';
    colorName.textContent = color.name;
    
    const colorDesc = document.createElement('div');
    colorDesc.className = 'color-description';
    colorDesc.textContent = color.description;
    
    colorInfo.appendChild(colorName);
    colorInfo.appendChild(colorDesc);
    
    card.appendChild(colorDisplay);
    card.appendChild(colorInfo);
    
    return card;
}

// 全局变量
let currentIndex = 0;
const batchSize = 100;
let filteredColors = [];
let allColors = [];
let isLoading = false;

// 修改加载状态显示
function showLoadingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'loading-indicator';
    indicator.textContent = '正在加载色卡...';
    document.body.appendChild(indicator);
    return indicator;
}

// 修改 loadMoreColors 函数中的加载状态显示
function loadMoreColors() {
    if (isLoading) return;
    isLoading = true;

    const loadingIndicator = showLoadingIndicator();
    const container = document.getElementById('colorCardsContainer');
    const fragment = document.createDocumentFragment();

    try {
        // 确保 filteredColors 有数据
        if (filteredColors.length === 0) {
            const category = document.querySelector('.category-btn.active').dataset.category;
            
            switch(category) {
                case 'basic':
                    filteredColors = [
                        ...basicColors,
                        ...generateBasicGradients()
                    ];
                    break;
                case 'web':
                    filteredColors = [
                        ...webColors,
                        ...generateWebGradients()
                    ];
                    break;
                case 'traditional':
                    filteredColors = [
                        ...traditionalColors,
                        ...extendedTraditionalColors,
                        ...generateTraditionalGradients()
                    ];
                    break;
                case 'gradient':
                    filteredColors = generateGradientColors();
                    break;
                default:
                    // 'all' 类别
                    filteredColors = [
                        ...basicColors,
                        ...webColors,
                        ...traditionalColors,
                        ...extendedTraditionalColors,
                        ...generateGradientColors()
                    ];
            }
        }

        // 分批加载颜色
        const endIndex = Math.min(currentIndex + batchSize, filteredColors.length);
        const currentBatch = filteredColors.slice(currentIndex, endIndex);
        
        currentBatch.forEach(color => {
            // 根据颜色类型使用不同的创建函数
            const card = color.gradient ? 
                createGradientCard(color) : 
                createColorCard(color);
            fragment.appendChild(card);
        });
        
        container.appendChild(fragment);
        currentIndex = endIndex;

        // 更新加载状态显示
        const progress = Math.round((currentIndex / filteredColors.length) * 100);
        loadingIndicator.textContent = `加载中... ${progress}%`;

        // 如果还有更多颜色，继续加载
        if (currentIndex < filteredColors.length) {
            requestAnimationFrame(() => {
                isLoading = false;
                if ((window.innerHeight + window.pageYOffset) >= document.documentElement.scrollHeight - 1000) {
                    loadMoreColors();
                }
            });
        } else {
            isLoading = false;
        }

    } catch (error) {
        console.error('加载色卡失败:', error);
        loadingIndicator.textContent = '加载失败，请重试';
    } finally {
        isLoading = false;
        // 2秒后移除加载指示器
        setTimeout(() => {
            loadingIndicator.classList.add('fade-out');
            setTimeout(() => {
                loadingIndicator.remove();
            }, 300);
        }, 2000);
    }
}

// 修改滚动事件监听
window.addEventListener('scroll', () => {
    if (!isLoading && 
        (window.innerHeight + window.pageYOffset) >= document.documentElement.scrollHeight - 1000) {
        loadMoreColors();
    }
});

// 修改 createColorIndex 函数，添加错误处理
function createColorIndex(colors) {
    try {
        // 创建搜索索引
        colors.forEach(color => {
            if (!color || !color.name) {
                console.warn('跳过无效的颜色数据:', color);
                return;
            }

            // 添加基本搜索词
            let keywords = new Set([
                color.name.toLowerCase(),
                color.description ? color.description.toLowerCase() : '',
                color.system ? color.system.toLowerCase() : ''
            ]);

            // 添加中文关键词
            if (color.keywords) {
                color.keywords.forEach(keyword => {
                    if (keyword) {
                        keywords.add(keyword.toLowerCase());
                    }
                });
            }

            // 添加颜色代码
            if (color.code) {
                keywords.add(color.code.toLowerCase());
            }

            // 存储关键词
            color.searchTerms = Array.from(keywords).filter(Boolean);
        });

        console.log('搜索索引创建完成，总颜色数:', colors.length);
    } catch (error) {
        console.error('创建搜索索引时出错:', error);
    }
}

// 修改 initializeColorCards 函数
function initializeColorCards() {
    try {
        console.log('开始初始化色卡...');
        window.scrollTo(0, 0);
        
        // 确保必要的容器存在
        if (!document.getElementById('colorCardsContainer')) {
            const container = document.createElement('div');
            container.id = 'colorCardsContainer';
            document.body.appendChild(container);
        }
        
        // 设置分类按钮
        setupCategoryButtons();
        
        // 初始化所有颜色数据
        allColors = [
            ...basicColors,
            ...webColors,
            ...traditionalColors,
            ...extendedTraditionalColors,
            ...generateGradientColors()
        ].filter(Boolean); // 过滤掉无效的颜色数据
        
        // 创建搜索索引
        createColorIndex(allColors);
        
        currentIndex = 0;
        filteredColors = allColors;
        
        // 设置事件监听
        setupEventListeners();
        
        // 添加回到顶部按钮
        addBackToTopButton();
        
        // 加载颜色
        loadMoreColors();
        
    } catch (error) {
        console.error('初始化色卡时出错:', error);
    }
}

// 修改滚动事件监听
function setupEventListeners() {
    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // 清除搜索
    const clearButton = document.querySelector('.clear-search');
    if (clearButton) {
        clearButton.addEventListener('click', clearSearch);
    }
    
    // 分类按钮
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterByCategory(button.dataset.category);
        });
    });

    // 滚动加载
    window.addEventListener('scroll', () => {
        if (!isLoading && 
            (window.innerHeight + window.pageYOffset) >= document.documentElement.scrollHeight - 1000) {
            loadMoreColors();
        }
    });
}

// 修改按类别筛选函数
function filterByCategory(category) {
    // 先回到顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // 延迟执行其他操作
    setTimeout(() => {
        currentIndex = 0;
        const container = document.getElementById('colorCardsContainer');
        container.innerHTML = '';
        
        const gradientColors = generateGradientColors();
        const allColors = [
            ...basicColors,
            ...webColors,
            ...traditionalColors,
            ...extendedTraditionalColors,
            ...gradientColors
        ];
        
        filteredColors = category === 'all' ? 
            allColors : 
            allColors.filter(color => color.system === category);
        
        loadMoreColors();
    }, 100);
}

// 添加颜色索引系���
const colorIndex = {
    nameIndex: new Map(),    // 名称索引
    codeIndex: new Map(),    // 颜色代码索引
    systemIndex: new Map(),  // 系统���型索引
    descIndex: new Map()     // 描述索引
};

// 添加中文搜索关键词函数
function addChineseKeywords(color) {
    const keywords = [];
    
    // 基础颜色关键词
    const colorKeywords = {
        '黑': ['黑', '墨', '玄', '漆'],
        '���': ['白', '雪', '霜', '银'],
        '红': ['红', '朱', '赤', '绯', '丹', '彤', '茜', '殷'],
        '绿': ['绿', '青', '翠', '碧', '松', '柳', '竹'],
        '蓝': ['蓝', '靛', '蔚', '湖', '天'],
        '黄': ['黄', '金', '橙', '杏', '姜'],
        '紫': ['紫', '青������', '紫��������', '葡萄'],
        '灰': ['灰', '银', '铅'],
        '棕': ['棕', '褐', '茶']
    };

    // 深浅关键词
    const depthKeywords = ['深', '浅', '淡', '暗', '亮', '鲜', '纯'];
    
    // 添加颜色名称相关的关键词
    Object.entries(colorKeywords).forEach(([baseColor, words]) => {
        if (color.name.includes(baseColor) || color.description.includes(baseColor)) {
            keywords.push(...words);
            keywords.push(baseColor + '色');
            // 添加深浅变体
            depthKeywords.forEach(depth => {
                keywords.push(depth + baseColor);
                keywords.push(depth + baseColor + '��');
            });
        }
    });

    // 添加特殊关键词
    if (color.system === 'traditional') {
        keywords.push('传统色', '中国色', '古典色');
    }
    if (color.system === 'basic') {
        keywords.push('基础色', '基本色');
    }
    if (color.gradient) {
        keywords.push('渐变', '渐变色', '过渡色');
    }

    // 添加描述相关��关键词
    const descKeywords = color.description.split(/[,\s]/);
    keywords.push(...descKeywords);

    return [...new Set(keywords)]; // 去重
}

// 修改颜色数据，添加搜索关键词
basicColors = basicColors.map(color => ({
    ...color,
    keywords: addChineseKeywords(color)
}));

webColors = webColors.map(color => ({
    ...color,
    keywords: addChineseKeywords(color)
}));

traditionalColors = traditionalColors.map(color => ({
    ...color,
    keywords: addChineseKeywords(color)
}));

// 添加颜色相似度计算函数
function getColorSimilarity(color1, color2) {
    // 将十���进制���色换为RGB
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    
    if (!rgb1 || !rgb2) return 0;
    
    // 计算RGB值的差异
    const rDiff = Math.abs(rgb1.r - rgb2.r);
    const gDiff = Math.abs(rgb1.g - rgb2.g);
    const bDiff = Math.abs(rgb1.b - rgb2.b);
    
    // 计算相���度（0-1之间，1表示完全相同）
    const similarity = 1 - ((rDiff + gDiff + bDiff) / (3 * 255));
    return similarity;
}

// 添加十六进制转RGB函数
function hexToRgb(hex) {
    // 移除#号如果存在
    hex = hex.replace(/^#/, '');
    
    // 处理缩写形式
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    
    const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// 修改搜索函数
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        filteredColors = getAllColors();
        resetAndReload();
        return;
    }

    try {
        const allColors = getAllColors();
        console.log('开始搜索:', searchTerm);

        // 找到所有包含搜索词的颜色
        const directMatches = allColors.filter(color => {
            const searchFields = [
                color.name,
                color.description,
                color.system,
                color.tooltip,
                ...(color.keywords || [])
            ];

            // 添加渐变色的搜索
            if (color.gradient) {
                // 解析渐变色的起始和结束颜色
                const gradientColors = color.gradient.match(/#[0-9A-Fa-f]{6}/g) || [];
                gradientColors.forEach(gradientColor => {
                    // 检查渐变色中的颜色是否与搜索词相关
                    const similarity = getColorSimilarity(gradientColor, '#000000'); // 假设搜索黑色
                    if (similarity > 0.85) {
                        searchFields.push('黑色渐变');
                    }
                });
            }

            // 检查颜色代码是否接近搜索的颜色
            if (searchTerm.includes('黑')) {
                const similarity = getColorSimilarity(color.code, '#000000');
                if (similarity > 0.85) {
                    searchFields.push('接近黑色');
                }
            }

            return searchFields.some(field => {
                if (!field) return false;
                return field.toLowerCase().includes(searchTerm);
            });
        });

        // 找到相似颜色
        const similarColors = allColors.filter(color => {
            // 如果已经在直接匹配中，跳过
            if (directMatches.includes(color)) return false;

            // 检查颜色相似度
            if (searchTerm.includes('黑')) {
                const similarity = getColorSimilarity(color.code, '#000000');
                return similarity > 0.7; // 降低阈值以包含更多相近颜色
            }

            // 检查渐变色
            if (color.gradient) {
                const gradientColors = color.gradient.match(/#[0-9A-Fa-f]{6}/g) || [];
                return gradientColors.some(gradientColor => {
                    const similarity = getColorSimilarity(gradientColor, '#000000');
                    return similarity > 0.7;
                });
            }

            return false;
        });

        // 合并直接匹配和相似颜色，并标记相似度
        filteredColors = [
            ...directMatches.map(color => ({
                ...color,
                matchType: 'direct'
            })),
            ...similarColors.map(color => ({
                ...color,
                matchType: 'similar',
                similarity: true
            }))
        ];

        console.log(`搜索词"${searchTerm}"找到 ${filteredColors.length} 个匹配的颜色`);
        
        currentIndex = 0;
        const container = document.getElementById('colorCardsContainer');
        container.innerHTML = '';
        
        if (filteredColors.length > 0) {
            loadMoreColors();
            showSearchFeedback(`找到 ${directMatches.length} 个直接匹配和 ${similarColors.length} 个相似颜色`);
        } else {
            container.innerHTML = '<div class="no-results">没有找到匹配的颜色</div>';
            showSearchFeedback('没有找到匹配的颜色');
        }

    } catch (error) {
        console.error('搜索出错:', error);
        showSearchFeedback('搜索出错，请重试');
    }
}

// 修改 getAllColors 函数确保返回所有颜色
function getAllColors() {
    return [
        ...basicColors,
        ...webColors,
        ...traditionalColors,
        ...extendedTraditionalColors,
        ...generateGradientColors()
    ];
}

// 添加回到顶部功能
function addBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);

    // 监听滚动事件
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // 点击回到顶部
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 修改 resetAndReload 函数
function resetAndReload() {
    // 先回到顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // 延迟执行重新加载
    setTimeout(() => {
        currentIndex = 0; // 重置索引
        const container = document.getElementById('colorCardsContainer');
        container.innerHTML = '';
        loadMoreColors();
    }, 300); // 增加延迟时间确保滚动完成
}

// 添加 hypercolor 渐变色集合
const hypercolorGradients = {
    // 蓝色系列
    'hyper-blue': {
        name: '超空间蓝',
        gradient: 'linear-gradient(to right, #0093E9, #80D0C7)',
        description: '清新蓝色渐变'
    },
    'ocean-blue': {
        name: '深海蓝',
        gradient: 'linear-gradient(to right, #2E3192, #1BFFFF)',
        description: '深邃海洋渐变'
    },
    'sky-blue': {
        name: '天空蓝',
        gradient: 'linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E)',
        description: '梦幻天空渐变'
    },

    // 紫色系列
    'royal-purple': {
        name: '皇家紫',
        gradient: 'linear-gradient(to right, #8E2DE2, #4A00E0)',
        description: '高贵紫色渐变'
    },
    'mystic-purple': {
        name: '神秘紫',
        gradient: 'linear-gradient(to right, #834D9B, #D04ED6)',
        description: '魔幻紫色渐变'
    },

    // 粉色系列
    'sweet-pink': {
        name: '甜心粉',
        gradient: 'linear-gradient(to right, #FF9A9E, #FAD0C4)',
        description: '温柔粉色渐变'
    },
    'neon-pink': {
        name: '霓虹粉',
        gradient: 'linear-gradient(to right, #FF057C, #8D0B93)',
        description: '炫彩粉色渐变'
    },

    // 绿色系列
    'emerald-green': {
        name: '翡翠绿',
        gradient: 'linear-gradient(to right, #43E97B, #38F9D7)',
        description: '清新绿色渐变'
    },
    'forest-green': {
        name: '森林绿',
        gradient: 'linear-gradient(to right, #0BA360, #3CBA92)',
        description: '自然绿色渐变'
    },

    // 橙色系列
    'sunset-orange': {
        name: '日落橙',
        gradient: 'linear-gradient(to right, #FA8BFF, #2BD2FF, #2BFF88)',
        description: '夕阳橙色渐变'
    },
    'fire-orange': {
        name: '火焰橙',
        gradient: 'linear-gradient(to right, #FFB75E, #ED8F03)',
        description: '热情橙色渐变'
    },

    // 多彩系列
    'rainbow': {
        name: '彩虹',
        gradient: 'linear-gradient(to right, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8F00FF)',
        description: '七彩渐变'
    },
    'aurora': {
        name: '极光',
        gradient: 'linear-gradient(to right, #00C9FF, #92FE9D)',
        description: '北极光渐变'
    },
    'candy': {
        name: '糖果',
        gradient: 'linear-gradient(to right, #FC466B, #3F5EFB)',
        description: '缤纷糖果渐变'
    }
};

// 修改生成渐变色卡的函数
function generateGradientColors() {
    const gradientColors = [];
    
    // 保留原有的渐变色
    try {
        const originalGradients = generateUniqueGradients();
        gradientColors.push(...originalGradients);
    } catch (error) {
        console.error('生成原有渐变色失败:', error);
    }
    
    // 添加 hypercolor 渐变色
    Object.entries(hypercolorGradients).forEach(([id, data]) => {
        gradientColors.push({
            name: data.name,
            gradient: data.gradient,
            description: data.description,
            system: 'gradient',
            id: id,
            direction: 'to right' // 默认方向
        });
    });

    return gradientColors;
}

// 添加动画样式
const gradientStyle = document.createElement('style');
gradientStyle.textContent = `
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.color-card[data-gradient-animation] .color-display {
    background-size: 200% 200%;
    animation: var(--gradient-animation);
}
`;
document.head.appendChild(gradientStyle);

// 添加页面加载完成后的处理
window.onload = function() {
    // 确保页面加载完成后回到顶部
    window.scrollTo(0, 0);
};

// 修改 DOMContentLoaded 件监听
document.addEventListener('DOMContentLoaded', () => {
    // 先回到顶部
    window.scrollTo(0, 0);
    // 然后初始化
    setTimeout(initializeColorCards, 100);
});

// 添加搜索反馈样式到 styles.css
const style = document.createElement('style');
style.textContent = `
.search-feedback {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    margin-top: 8px;
    font-size: 14px;
    display: none;
    z-index: 1000;
}
`;
document.head.appendChild(style);

// 添加样式
const noResultsStyle = document.createElement('style');
noResultsStyle.textContent = `
.no-results {
    text-align: center;
    padding: 20px;
    color: #666;
    font-size: 16px;
    margin-top: 20px;
}
`;
document.head.appendChild(noResultsStyle);

// 添加清除搜索函数
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    filteredColors = getAllColors();
    currentIndex = 0;
    const container = document.getElementById('colorCardsContainer');
    container.innerHTML = '';
    loadMoreColors();
    showSearchFeedback('已清除搜索');
}

// 添加 showSearchFeedback 函数
function showSearchFeedback(message) {
    let feedback = document.getElementById('searchFeedback');
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.id = 'searchFeedback';
        feedback.className = 'search-feedback';
        const searchContainer = document.querySelector('.search-container');
        if (searchContainer) {
            searchContainer.appendChild(feedback);
        } else {
            document.body.appendChild(feedback);
        }
    }

    feedback.textContent = message;
    feedback.style.display = 'block';

    // 3秒后自动隐藏
    setTimeout(() => {
        feedback.style.display = 'none';
    }, 3000);
}

// 添加相应的 CSS 样式
const searchFeedbackStyle = document.createElement('style');
searchFeedbackStyle.textContent = `
.search-feedback {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 14px;
    z-index: 1000;
    display: none;
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translate(-50%, -20px); }
    to { opacity: 1; transform: translate(-50%, 0); }
}
`;
document.head.appendChild(searchFeedbackStyle);

// 添加相似度标识的样式
const similarityBadgeStyle = document.createElement('style');
similarityBadgeStyle.textContent = `
.similarity-badge {
    position: absolute;
    top: 5px;
    right: 5px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 12px;
}
`;
document.head.appendChild(similarityBadgeStyle);

// ���加匹配标识的样式
const matchBadgeStyle = document.createElement('style');
matchBadgeStyle.textContent = `
.match-badge {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 12px;
    color: white;
}

.match-badge.direct {
    background: rgba(0, 150, 0, 0.8);
}

.match-badge.similar {
    background: rgba(0, 0, 0, 0.6);
}
`;
document.head.appendChild(matchBadgeStyle);

// 添加复制到剪贴板的函数
function copyToClipboard(text) {
    // 创建临时输入框
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    
    // 选择并复制
    tempInput.select();
    document.execCommand('copy');
    
    // 移除临时输入框
    document.body.removeChild(tempInput);
}

// 删除所有其他的 showCopyFeedback 函数定义和相关样式定义
// 只保留这一个版本
function showCopyFeedback(message) {
    // 检查是否已存在反馈元素
    let feedback = document.querySelector('.copy-feedback');
    if (feedback) {
        feedback.remove(); // 如果存在就移除旧的
    }

    // 创建新的反馈元素
    feedback = document.createElement('div');
    feedback.className = 'copy-feedback';
    feedback.textContent = message;
    document.body.appendChild(feedback);
    
    // 添加淡入效果
    requestAnimationFrame(() => {
        feedback.style.opacity = '1';
        feedback.style.transform = 'translate(-50%, 0)';
    });
    
    // 2秒后移除
    setTimeout(() => {
        feedback.style.opacity = '0';
        feedback.style.transform = 'translate(-50%, -20px)';
        setTimeout(() => {
            feedback.remove();
        }, 300);
    }, 2000);
}

// 添加复制反馈样式（确保这个样式只添加一次）
if (!document.querySelector('#copyFeedbackStyle')) {
    const copyFeedbackStyle = document.createElement('style');
    copyFeedbackStyle.id = 'copyFeedbackStyle';
    copyFeedbackStyle.textContent = `
    .copy-feedback {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translate(-50%, -20px);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 1000;
        opacity: 0;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    `;
    document.head.appendChild(copyFeedbackStyle);
}

// 修改点击事件处理，添加波纹效果
function addClickEffect(element) {
    element.addEventListener('click', function(e) {
        // 移除旧的波纹效果
        this.classList.remove('ripple');
        
        // 触发重绘
        void this.offsetWidth;
        
        // 添加新的波纹效果
        this.classList.add('ripple');
        
        // 移除波纹效果
        setTimeout(() => {
            this.classList.remove('ripple');
        }, 400);
    });
}

// 添加色卡速览的样式
const quickViewStyle = document.createElement('style');
quickViewStyle.textContent = `
.quick-view-btn {
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
    margin: 0 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.quick-view-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.quick-view-btn.active {
    background: linear-gradient(45deg, #2C3E50, #3498DB);
    transform: scale(0.95);
}

.quick-view-mode .color-card {
    width: 60px;  /* 更小的卡片尺寸 */
    height: 80px;
    margin: 4px;
    transition: all 0.3s ease;
}

.quick-view-mode .color-display {
    height: 60px;
}

.quick-view-mode .color-info {
    padding: 2px 4px;
}

.quick-view-mode .color-name {
    font-size: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.quick-view-mode .color-description {
    display: none;
}

.quick-view-mode .color-card:hover {
    transform: scale(1.1);
    z-index: 10;
}

.quick-view-mode .color-card:hover .color-description {
    display: block;
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px;
    font-size: 10px;
    border-radius: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.color-cards-container {
    transition: all 0.3s ease;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding: 20px;
}

.quick-view-mode .color-cards-container {
    max-width: 1400px;
    margin: 0 auto;
}

/* 添加网格视图 */
.quick-view-mode {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 4px;
    padding: 10px;
}

/* 添加分类标题 */
.category-title {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    color: #666;
    grid-column: 1 / -1;
}
`;
document.head.appendChild(quickViewStyle);

// 添加色卡速览按钮
function addQuickViewButton() {
    const buttonContainer = document.querySelector('.category-buttons') || document.createElement('div');
    if (!buttonContainer.classList.contains('category-buttons')) {
        buttonContainer.className = 'category-buttons';
        document.body.insertBefore(buttonContainer, document.getElementById('colorCardsContainer'));
    }

    const quickViewBtn = document.createElement('button');
    quickViewBtn.className = 'quick-view-btn';
    quickViewBtn.textContent = '色卡速览';
    buttonContainer.appendChild(quickViewBtn);

    let isQuickViewMode = false;
    quickViewBtn.addEventListener('click', () => {
        isQuickViewMode = !isQuickViewMode;
        quickViewBtn.classList.toggle('active');
        const container = document.getElementById('colorCardsContainer');
        container.classList.toggle('quick-view-mode');
        
        if (isQuickViewMode) {
            showAllColorCards();
            quickViewBtn.textContent = '返回正常视图';
        } else {
            resetAndReload();
            quickViewBtn.textContent = '色卡速览';
        }
    });
}

// 显示所有色卡的函数
function showAllColorCards() {
    const container = document.getElementById('colorCardsContainer');
    container.innerHTML = '';

    // 获取所有颜色并按类别分组
    const categories = {
        'basic': { title: '基础色卡', colors: basicColors },
        'traditional': { title: '中国传统色', colors: [...traditionalColors, ...extendedTraditionalColors] },
        'web': { title: '网页安全色', colors: webColors },
        'gradient': { title: '渐变色卡', colors: generateGradientColors() },
        'system': { title: '系统色卡', colors: generateSystemColors() }
    };

    // 为每个类别创建分组
    Object.entries(categories).forEach(([key, category]) => {
        // 添加分类标题
        const titleDiv = document.createElement('div');
        titleDiv.className = 'category-title';
        titleDiv.textContent = category.title;
        container.appendChild(titleDiv);

        // 添加该分类的所有色卡
        category.colors.forEach(color => {
            const card = createColorCard(color);
            container.appendChild(card);
        });
    });
}

// 添加分类按钮样式（这是新的样式，以直接添加）
const categoryButtonStyle = document.createElement('style');
categoryButtonStyle.textContent = `
.category-buttons {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 20px 0;
    flex-wrap: wrap;
    padding: 0 20px;
}

.category-btn {
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 为每个按钮设置不同的渐变色 */
.category-btn[data-category="all"] {
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
}

.category-btn[data-category="basic"] {
    background: linear-gradient(45deg, #FF8C42, #FF5733);
}

.category-btn[data-category="traditional"] {
    background: linear-gradient(45deg, #E84A5F, #FF847C);
}

.category-btn[data-category="web"] {
    background: linear-gradient(45deg, #6C5B7B, #C06C84);
}

.category-btn[data-category="gradient"] {
    background: linear-gradient(45deg, #45B7D1, #2E8BC0);
}

.category-btn[data-category="system"] {
    background: linear-gradient(45deg, #3AB795, #45B7D1);
}

.category-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.category-btn:active {
    transform: translateY(1px);
}

.category-btn.active {
    background: linear-gradient(45deg, #2C3E50, #3498DB);
    transform: scale(0.95);
}

/* 添加色卡预览按钮的独立样式 */
.quick-view-btn {
    position: fixed;
    right: 20px;
    top: 20px;
    background: linear-gradient(45deg, #2C3E50, #3498DB);
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.quick-view-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.quick-view-btn:active {
    transform: translateY(1px);
}

.quick-view-btn.active {
    background: linear-gradient(45deg, #3498DB, #2C3E50);
}

/* 色卡预览模式的样式 */
.quick-view-mode .color-card {
    width: 40px;
    height: 60px;
    margin: 2px;
    transition: all 0.3s ease;
}

.quick-view-mode .color-display {
    height: 40px;
}

.quick-view-mode .color-info {
    padding: 2px;
}

.quick-view-mode .color-name {
    font-size: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.quick-view-mode .color-description {
    display: none;
}

.quick-view-mode .color-card:hover {
    transform: scale(1.5);
    z-index: 10;
}

.quick-view-mode .color-card:hover .color-description {
    display: block;
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px;
    font-size: 10px;
    border-radius: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* 预览模式网格布局 */
.quick-view-mode {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    gap: 2px;
    padding: 10px;
    max-width: 100%;
    margin: 0 auto;
}
`;
document.head.appendChild(categoryButtonStyle);

// 添加新的函数这是新函数，可以直接添加）
function setupCategoryButtons() {
    // 先检查是否已存在按钮容器
    let buttonContainer = document.querySelector('.category-buttons');
    const colorCardsContainer = document.getElementById('colorCardsContainer');
    
    // 如按钮容器不存在，创一个新的
    if (!buttonContainer) {
        buttonContainer = document.createElement('div');
        buttonContainer.className = 'category-buttons';
        
        // 如果 colorCardsContainer 存在，在它前面插入按钮容器
        if (colorCardsContainer) {
            colorCardsContainer.parentNode.insertBefore(buttonContainer, colorCardsContainer);
        } else {
            // 如果找不到 colorCardsContainer，创建一���并添加到 body
            const newColorCardsContainer = document.createElement('div');
            newColorCardsContainer.id = 'colorCardsContainer';
            document.body.appendChild(buttonContainer);
            document.body.appendChild(newColorCardsContainer);
        }
    }
    
    // 清空现有按钮（避免重复）
    buttonContainer.innerHTML = '';
    
    const categories = [
        { id: 'all', text: '所有色卡' },
        { id: 'basic', text: '基础色卡' },
        { id: 'traditional', text: '中国传统色' },
        { id: 'web', text: '网页安全色' },
        { id: 'gradient', text: '渐变色卡' },
        { id: 'system', text: '系统色卡' }
    ];

    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.setAttribute('data-category', category.id);
        button.textContent = category.text;
        
        // 添加点击果
        addClickEffect(button);
        
        button.addEventListener('click', () => {
            // 移除所有按钮的活跃状态
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // 添加当前按钮的活跃状态
            button.classList.add('active');
            
            // 过滤颜色
            filterByCategory(category.id);
        });
        
        buttonContainer.appendChild(button);
    });

    // 默认激活"所有色卡"按钮
    buttonContainer.querySelector('[data-category="all"]').classList.add('active');
}

// 修改创建色卡的函数，添加方向控制
function createGradientCard(cardData) {
    const card = document.createElement('div');
    card.className = 'color-card gradient-card';
    
    // 创建渐变显示区域
    const colorDisplay = document.createElement('div');
    colorDisplay.className = 'color-display';
    colorDisplay.style.background = cardData.gradient;
    
    // 创建白色控制区域
    const controlArea = document.createElement('div');
    controlArea.className = 'gradient-control-area';
    
    // 创建方向控制按钮组
    const directionButtons = document.createElement('div');
    directionButtons.className = 'gradient-direction-buttons';
    
    // 添加方向按钮
    const directions = [
        { text: '→', value: 'to right', title: '向右' },
        { text: '←', value: 'to left', title: '向左' },
        { text: '↑', value: 'to top', title: '向上' },
        { text: '↓', value: 'to bottom', title: '向下' },
        { text: '↗', value: 'to top right', title: '右上' },
        { text: '↘', value: 'to bottom right', title: '右下' },
        { text: '↖', value: 'to top left', title: '左上' },
        { text: '↙', value: 'to bottom left', title: '左下' },
        { text: '⊙', value: 'circle at center', title: '中心' }
    ];
    
    directions.forEach(direction => {
        const btn = document.createElement('button');
        btn.className = 'direction-btn';
        btn.textContent = direction.text;
        btn.title = direction.title;
        
        if (cardData.gradient.includes(direction.value)) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', () => {
            directionButtons.querySelectorAll('.direction-btn').forEach(b => {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            
            // 修改颜色提取逻辑
            const gradientMatch = cardData.gradient.match(/(?:linear|radial)-gradient\((.*)\)/);
            if (gradientMatch) {
                const gradientContent = gradientMatch[1];
                const colors = gradientContent.split(',')
                    .slice(1)  // 跳过方向部分
                    .map(c => c.trim());  // 清理空格
                
                const newGradient = direction.value.includes('circle') ?
                    `radial-gradient(${direction.value}, ${colors.join(', ')})` :
                    `linear-gradient(${direction.value}, ${colors.join(', ')})`;
                
                colorDisplay.style.background = newGradient;
                cardData.gradient = newGradient;
                gradientValue.textContent = newGradient;
            }
        });
        
        directionButtons.appendChild(btn);
    });
    
    // 创建渐变值显示
    const gradientValue = document.createElement('div');
    gradientValue.className = 'gradient-value';
    gradientValue.textContent = cardData.gradient;
    
    // 添加复制按钮
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 4v12h12V4H8zm11 11H9V5h10v10zm-3-14v2h3v3h2V1h-5zM3 3h5V1H1v5h2V3zm2 18v-5H3v5h5v2H1v-7h2zm18 0v2h-5v-2h3v-3h2v3z" fill="currentColor"/>
    </svg>`;
    
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(cardData.gradient)
            .then(() => showCopyFeedback('已复制渐变代码'))
            .catch(() => showCopyFeedback('复制失败'));
    });
    
    gradientValue.appendChild(copyBtn);
    
    // 组装控制区域
    controlArea.appendChild(directionButtons);
    controlArea.appendChild(gradientValue);
    
    // 创建信息区域
    const colorInfo = document.createElement('div');
    colorInfo.className = 'color-info';
    colorInfo.innerHTML = `
        <div class="color-name">${cardData.name}</div>
        <div class="color-description">${cardData.description}</div>
    `;
    
    // 组装卡片
    card.appendChild(colorDisplay);
    card.appendChild(controlArea);
    card.appendChild(colorInfo);
    
    return card;
}

// 生成网页安全色
function generateWebColors() {
    const webColors = [];
    const steps = [0, 51, 102, 153, 204, 255]; // 网页安全色的RGB值步进
    
    // 生成所有可能的网页安全色组合
    for (let r of steps) {
        for (let g of steps) {
            for (let b of steps) {
                const hex = rgbToHex(r, g, b); // 使用已有的 rgbToHex 函数
                const name = `Web ${hex}`;
                const description = `R:${r} G:${g} B:${b}`;
                
                webColors.push({
                    name: name,
                    code: hex,
                    description: description,
                    system: 'web',
                    keywords: [`web${hex}`, `rgb(${r},${g},${b})`]
                });
            }
        }
    }
    
    // 随机打乱顺序
    return webColors.sort(() => Math.random() - 0.5);
}

// 修改加载函数以支持分批加载
function loadWebColors(startIndex = 0, batchSize = 100) {
    const container = document.getElementById('colorCardsContainer');
    const webColors = generateWebColors();
    const endIndex = Math.min(startIndex + batchSize, webColors.length);
    const batch = webColors.slice(startIndex, endIndex);
    
    batch.forEach(color => {
        const card = createWebColorCard(color);
        container.appendChild(card);
    });
    
    // 如果还有更多颜色，继续加载
    if (endIndex < webColors.length) {
        setTimeout(() => {
            loadWebColors(endIndex, batchSize);
        }, 100);
    }
}

// 修改颜色卡片创建函数，添加渐变背景
function createWebColorCard(color) {
    const card = document.createElement('div');
    card.className = 'color-card';
    
    const colorDisplay = document.createElement('div');
    colorDisplay.className = 'color-display';
    colorDisplay.style.background = color.code;
    
    // 添加渐变效果
    colorDisplay.style.backgroundImage = `linear-gradient(45deg, ${color.code}, ${adjustBrightness(color.code, 20)})`;
    
    const colorInfo = document.createElement('div');
    colorInfo.className = 'color-info';
    colorInfo.innerHTML = `
        <div class="color-name">${color.name}</div>
        <div class="color-description">${color.description}</div>
    `;
    
    card.appendChild(colorDisplay);
    card.appendChild(colorInfo);
    
    // 添加点击复制功能
    card.addEventListener('click', () => {
        navigator.clipboard.writeText(color.code)
            .then(() => showCopyFeedback('已复制颜色代码'))
            .catch(() => showCopyFeedback('复制失败'));
    });
    
    return card;
}

// 调整颜色亮度的辅助函数
function adjustBrightness(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = (num >> 16) + percent;
    const g = ((num >> 8) & 0x00FF) + percent;
    const b = (num & 0x0000FF) + percent;
    
    return '#' + (
        0x1000000 +
        (r < 255 ? (r < 1 ? 0 : r) : 255) * 0x10000 +
        (g < 255 ? (g < 1 ? 0 : g) : 255) * 0x100 +
        (b < 255 ? (b < 1 ? 0 : b) : 255)
    ).toString(16).slice(1).toUpperCase();
}

