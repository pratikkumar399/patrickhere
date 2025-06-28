"use client";
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

type Heading = {
    text: string | null;
    id: string;
};

interface PostContentProps {
    htmlContent: string;
}

const PostContent: React.FC<PostContentProps> = ({ htmlContent }) => {
    const [headings, setHeadings] = useState<Heading[]>([]);

    useEffect(() => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        const h2Elements = tempDiv.querySelectorAll('h2');

        const h2Data: Heading[] = Array.from(h2Elements).map(h2 => ({
            text: h2.textContent,
            id: h2.id,
        }));

        setHeadings(h2Data);
    }, [htmlContent]);

    return (
        <div className="on-this-page absolute top-24 md:right-48 lg:right-1/4 hidden lg:block">
        
            <ul className="text-sm space-y-1">
                {headings.map((heading, index) => (
                    <li key={index}>
                        <a href={`#${heading.id}`}>{heading.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostContent;
