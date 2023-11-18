## 使用webpack svg插件 svg-sprite-loader
该 loader 的作用是将 项目中引用的 svg 在html中创建标签并导入
```sh
yarn add --dev svg-sprite-loader
```
配置 webpack.config.js
```js
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ]
  },
```

增加 custom.d.ts，声明svg的类型
```js
declare module '*.svg' {
  const content: any;
  export default content;
}
```


tsconfig.json 声明类型文件范围
> 路径中的 ** 表示任何路径，可以是a/b/c/... 也可以为空
```js
"include": [
  "lib/**/*"
],
```

### 导入所有 svg 文件

```js
// importIcons.js
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('./icons/', true, /\.svg$/))
} catch (error) {
  console.log('svg导入错误: ', error)
}

```

### 引入scss
**loader 不指定版本的话，可能会有问题**
```sh
yarn add -D  css-loader@5.2.6 sass sass-loader@10.1.1 style-loader@2.0.0
```

```js
// webpack.config.js
rules: [
  {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  }
]
```

## icon 组件参数
```js
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}
```

```js
// 防止 className 被覆盖，添加 classes 组合类名
export default function classes(...names: Array<string | undefined>) {
    return names.filter(Boolean).join(' ');
}
```

```js
import classes from '../helpers/classes';

const Icon: React.FC<IconProps> = ({ className, name, ...restProps }) => {
  return (
    <svg className={classes('idbi-ui-icon', className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}
```

## 持续集成

### 测试覆盖率

### circle CI