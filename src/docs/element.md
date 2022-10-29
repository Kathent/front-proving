# 元素类型

## 1.块元素  

常见块状元素：div,p,ul,ol,li,dl,dt,dd,form,hr,table,tr,td,h1-h6,filedset,caption
块状元素特点：

- 以块的形式显示为一个矩形区域；
- 块状元素独占一行，自上而下排列  
- 块状元素可以定义自己的宽度和高度，以及盒模型中的margin,padding,border；
- 块状元素可以作为一个容器包含其他的块状元素或内联元素。

## 2.内联元素（行内元素）  

### 2.1 常见内联元素：a,strong,b,i,em,span,label,img,input

内联元素特点：

- 内联元素在一行逐个进行显示；

- 内联元素没有自己的形状，不能定义宽度和高度，它的宽高由内容来决定；

- 内联元素设置与高度相关的一些属性（如margin-top,margin-bottom,padding-top,padding-bottom,line-height），显示无效或显示不准确；

- 内联元素设置左右填充和外间距是可以的。

### 2.2 内联块状元素：img,input,textarea

内联块状元素特点：

- 即具有内联元素特点，也具有块状元素特点
- 即可以定义容器的宽，高，margin，padding等，还可以和其他内联元素在一行显示

## 3.可变元素  

# 元素类型转换

display:block|inline|inline-block|none|list-item;

- block:将元素转换为块状元素（大部分块状元素的默认display属性值）
- inline:将元素转换为内联元素（大部分内联元素的默认display属性值）
- inline-block:将元素转换为内联块状元素（img,input等元素的默认display属性值）
- list-item:将元素转换为列表类型（li的默认display属性值）
- none:元素隐藏不可见

注：当元素设置了float属性后，就相当于设置了display:block;可以给元素定义宽，高了

三、置换元素和非置换元素

1.置换元素
浏览器根据元素的标签和属性，来决定元素的具体显示内容
如img标签，src属性决定了在网页呈现不同的图片
如input标签，type属性决定了在网页中呈现什么类型的input控件
2.非置换元素
除置换元素外其他的html元素都是非置换元素