const Random = () => {
    const randomContent = [
        "https://mushokutensei.fandom.com/wiki/Rudeus_Greyrat",
        "https://mushokutensei.fandom.com/wiki/Eris_Boreas_Greyrat",
        "https://mushokutensei.fandom.com/wiki/Roxy_Migurdia",
        "https://mushokutensei.fandom.com/wiki/Teleport_Incident",
        "https://mushokutensei.fandom.com/wiki/Anime",
        "https://mushokutensei.fandom.com/wiki/Web_Novel",
        "https://mushokutensei.fandom.com/wiki/Seven_Great_Powers",
        "https://mushokutensei.fandom.com/wiki/Zanoba_Shirone",
        "https://mushokutensei.fandom.com/wiki/Sylphiette",
        "https://mushokutensei.fandom.com/wiki/Elinalise_Dragonroad",
    ]
    console.log(randomContent[Math.floor(Math.random() * 10)])

    return (
        <main>
            <iframe
                src={randomContent[Math.floor(Math.random() * 10)]}
                width='10000'
                height='10000'
            ></iframe>
        </main>
    )
}

export default Random
