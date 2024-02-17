interface Image {
    url: string,
    alt: string
}


export interface Post {
    frontmatter: { 
        layout: string,
        title: string,
        author: string,
        description: string,
        image: Image,
        pubDate: string,
        tags: string[]
    },
    file: string,
    url: string
}