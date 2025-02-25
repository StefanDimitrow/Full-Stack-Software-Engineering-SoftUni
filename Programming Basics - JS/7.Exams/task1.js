function repainting(input) {

    paintNum = Number(input[0])
    wallpapersNum = Number(input[1])
    pairGlovesPrice = Number(input[2])
    brushPrice = Number(input[3])

    let paintPrice = 21.50
    let wallpaperPrice = 5.20

    let totalPaintPrice = paintPrice * paintNum
    let totalWallpaperPrice = wallpaperPrice * wallpapersNum

    let totalGlovesCount = Math.ceil(0.35*wallpapersNum)
    let totalBrushCount = Math.floor(0.48*paintNum)

    let totalGlovesPrice = (totalGlovesCount * pairGlovesPrice)
    let totalBrushPrice = (totalBrushCount * brushPrice)

    let totalPrice= totalPaintPrice + totalWallpaperPrice + totalBrushPrice + totalGlovesPrice
    let delivery = (totalPrice / 15).toFixed(2)
    console.log(`This delivery will cost ${delivery} lv.`)

}
repainting(["10", "8", "2.2","5"])