export const imagePlaceholder = (width: number, height: number, text = "Venezia") => {
    return `https://placehold.co/${width}x${height}/1a1a1a/d4af37?text=${encodeURIComponent(text)}`;
};

export const UNSPLASH_IMAGES = {
    hero: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop", // Rich Black & Gold Abstract
    team1: "/images/team/vishak.jpg", // Vishak Marcil
    team2: "/images/team/john.jpg", // John Clement
    team3: "/images/team/krishnakumar.jpg", // Krishnakumar K
    gallery1: "https://images.unsplash.com/photo-1577773215915-18ab4999ab56?q=80&w=2070&auto=format&fit=crop", // Textiles/Exports (Dark patterned fabric)
    gallery2: "https://images.unsplash.com/photo-1596791678229-873b88b7cc4f?q=80&w=2072&auto=format&fit=crop", // Spices/Exports (Spices on dark bg)
    gallery3: "https://images.unsplash.com/photo-1629224316810-9d8805b95076?q=80&w=2070&auto=format&fit=crop", // Jewelry/Luxury (Bridal gold)
    gallery4: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop", // Ceramics (Dark moody pottery)
};
