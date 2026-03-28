import { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Hero() {

    const images = [
    
        { img: "/assets/carousel-images/img_1.avif" },
        { img: "/assets/carousel-images/img_2.avif" },
        { img: "/assets/carousel-images/img_3.avif" },
        { img: "/assets/carousel-images/img_4.avif" },
        { img: "/assets/carousel-images/img_5.avif" },
        { img: "/assets/carousel-images/img_6.avif" },
        { img: "/assets/carousel-images/img_7.avif" },
        { img: "/assets/carousel-images/img_8.avif" },
        { img: "/assets/carousel-images/img_9.avif" },
        { img: "/assets/carousel-images/img_10.avif" },
        { img: "/assets/carousel-images/img_11.avif" },
        { img: "/assets/carousel-images/img_12.avif" },
        { img: "/assets/carousel-images/img_13.avif" },
        { img: "/assets/carousel-images/img_14.avif" }
    
    ];
    
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
    
        return () => clearInterval(timer);
      
    }, [images.length]);
    
    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    
    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <>

            <div className="flex justify-center bg-[#f5f5f5] items-center">

                <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      
                    <Box component="img" src={images[index].img} />

                        <IconButton onClick={prevSlide}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                transform: "translateY(-50%)",
                                bgcolor: "rgba(0,0,0,0.4)",
                                width: 30,
                                height: 30,
                            }}
                        >
                        <ArrowBackIosNewIcon sx={{ fontSize: 14, color: "#fff" }} />
                
                        </IconButton>

                        <IconButton onClick={nextSlide}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                right: 1,
                                transform: "translateY(-50%)",
                                bgcolor: "rgba(0,0,0,0.4)",
                                width: 30,
                                height: 30,
                            }}
                        >
                        <ArrowForwardIosIcon sx={{ fontSize: 14, color: "#fff" }} />
                
                        </IconButton>

                        <Box
                            sx={{
                              position: "absolute",
                              bottom: 15,
                              left: "50%",
                              transform: "translateX(-50%)",
                              display: "flex",
                              gap: 1,
                            }}
                        >
                    
                        {images.map((_, i) => (

                            <Box key={i} onClick={() => setIndex(i)}
                                sx={{
                                    width: 9,
                                    height: 8,
                                    borderRadius: "50%",
                                    bgcolor: i === index ? "white" : "rgba(255,255,255,0.5)",
                                    cursor: "pointer",
                                    mb: "2px"
                                }}
                            />
                        ))}

                    </Box>
                </Box>

                <div>
                    <img src="/assets/carousel-images/side-img.png" alt="Side-img" width={"240px"} />
                </div>

            </div>

            <img src="/assets/global-images/style-img.webp" alt="Style-Img" className="mt-5" />

        </>
    )

}

export default Hero
