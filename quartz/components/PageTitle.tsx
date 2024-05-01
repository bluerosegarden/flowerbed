import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const flowers = [
    ["flowerBlue", "flowerRose", "flowerGarden"],
    ["flowerWitch", "flowerGarden", "flowerRose"],
    ["flowerGarden", "flowerBlue", "flowerWitch"],
  ]
  const flowerPictograms = [
    ["❀", "✿", "✽"],
    ["✿", "✽", "❀"],
    ["✿", "❀", "✽"],
  ]
  const flowerPictogramIndex = Math.floor(Math.random() * 3)
  const flowerIndex = Math.floor(Math.random() * 3)
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        {title}
        <span id={flowers[flowerIndex][0]}>{flowerPictograms[flowerPictogramIndex][0]}</span>
        <span id={flowers[flowerIndex][1]}>{flowerPictograms[flowerPictogramIndex][1]}</span>
        <span id={flowers[flowerIndex][2]}>{flowerPictograms[flowerPictogramIndex][2]}</span>
      </a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
