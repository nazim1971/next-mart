export interface ICategory {
    _id: string;
    name: string;
    description: string;
    slug: string;
    icon: string;
    isActive: boolean;
    parent: string | null;
    children: ICategory[];
    createdAt: string;
    updatedAt: string;
    createdBy: string;
  }
  