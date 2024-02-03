export enum PublishStatus {
  writing = "writing",
  readyPublish = "readyPublish",
  published = "published",
  baned = "baned",
}

export type TBook = {
  id: number;
  name: string;
  author: string;
  pages: number;
  edition: number;
  publishStatus: PublishStatus;
  isAvailable: boolean;
  diff: number;
  amount: number;
};

export type TBooks = TBook[];
