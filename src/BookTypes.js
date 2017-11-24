const Move: "move" = "move";
const CurrentRead: "currentlyReading" = "currentlyReading";
const WantToRead: "wantToRead" = "wantToRead";
const AlreadyRead: "read" = "read";
const None: "none" = "none";

export type BookStatus = typeof Move | typeof CurrentRead | typeof WantToRead |
                         typeof AlreadyRead | typeof None;

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


export type BookInfo = {
    shelf: BookStatus,
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

export type BookStatusDescription = {
    value: BookStatus,
    description: string,
};

export type BookReadingStatus = {
    id: string,
    status: BookStatus,
};

export type BookReadingStatusArray = Array<BookReadingStatus>;

export type InputEventHandler = (event: SyntheticInputEvent<HTMLInputElement>) => void;

const bookStatusDescriptionArray: Array<BookStatusDescription> = [
    {value: Move, description: "Move to ..."},
    {value: CurrentRead, description: "Currently Reading"},
    {value: WantToRead, description: "Want to Read"},
    {value: AlreadyRead, description: "Read"},
    {value: None, description: "None"},
];

module.exports = {
    Move, CurrentRead, WantToRead, AlreadyRead, None,
    bookStatusDescriptionArray,
};
