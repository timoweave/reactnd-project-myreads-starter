
export type IndustryIdentifier = {
    identifier: string,
    type: string,
};

export type ImageLinks = {
    smallThumbnail: string,
    thumbnail: string,
};

export type PanelizationSummary = {
    containsEpubBubbles: boolean,
    containsImageBubbles: boolean,
};

export type ReadingModes = {
    text: boolean,
    image: boolean,
};

export type Book = {
    shelf: string,    
    title: string,
    subtitle: string,
    authors: Array<string>,
    publishedDate: string,
    description: string,
    industryIdentifiers: Array<IndustryIdentifier>,
    allowAnonLogging: boolean,
    averageRating: number,
    canonicalVolumeLink: string,
    categories: Array<string>,
    contentVersion: string,
    description: string,
    id: string,
    imageLinks: ImageLinks,
    infoLink: string,
    language: string,
    maturityRating: string,
    pageCount: number,
    panelizationSummary: PanelizationSummary,
    previewLink: string,
    printType: string,
    publishedDate: string,
    publisher: string,
    ratingsCount: number,
    readingModes: ReadingModes,
};
