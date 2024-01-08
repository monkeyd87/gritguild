
"use client"
import React, { useEffect } from 'react';

const InstagramEmbed = () => {
    useEffect(() => {
        // Load Instagram embed script
        const script = document.createElement('script');
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        // Optional: Clean up the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
        className=''
            dangerouslySetInnerHTML={{
                __html: `
                    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/mr.djack_art/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14">
                        <!-- Your Instagram embed HTML goes here -->
                    </blockquote>
                `
            }}
        />
    );
};

export default InstagramEmbed;
