
export function getFiles(name) {

    let name2 = name.replace("_upright-tr-zoom_zoom", "-1")
    name2 = name2.replace("_frontfacing-wh-std", "-2")
    name2 = name2.replace("_frontfacing-tr-std", "-2")
    name2 = name2.replace("_flatlay-std", "-3")
    name2 = name2.replace("_layingdown-std", "-4")
    name2 = name2.replace("_presentationbox-std", "-5")
    name2 = name2.replace(".png", ".webp")
    name2 = name2.replace(".jpg", ".webp")


    return name2
}

