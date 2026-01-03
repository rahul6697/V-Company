export const imagePlaceholder = (width: number, height: number, text = "Venezia") => {
    return `https://placehold.co/${width}x${height}/1a1a1a/d4af37?text=${encodeURIComponent(text)}`;
};

export const UNSPLASH_IMAGES = {
    hero: "https://picsum.photos/seed/hero/1920/1080", // Abstract/Creative
    team1: "/images/team/vishak.jpg", // Vishak Marcil
    team2: "/images/team/john.jpg", // John Clement
    team3: "/images/team/krishnakumar.jpg", // Krishnakumar K
    gallery1: "https://picsum.photos/seed/spices/800/600",
    gallery2: "https://picsum.photos/seed/fabric/800/600",
    gallery3: "https://picsum.photos/seed/ship/800/1000",
    gallery4: "https://picsum.photos/seed/business/800/600",
    gallery5: "https://picsum.photos/seed/warehouse/800/600",
    gallery6: "https://picsum.photos/seed/pottery/800/600",
};
