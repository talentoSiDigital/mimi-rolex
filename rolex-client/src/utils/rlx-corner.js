export default rlxCornerCallback = (Corner) => {
    rlxCornerCallback = null;
    const corner = new Corner({
        as: "standalone",
        lang: "es",
        consent: true,
        legal: "https://mimijoyeria.com/",
        destination: "new-watches-2025",
    });

    corner.mount("#rlxCorner");
};

