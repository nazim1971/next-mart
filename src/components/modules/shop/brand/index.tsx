"use client"
import React from 'react';
import CreateBrandModel from './CreateBrandModel';
import { IBrand } from '@/types';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import { ColumnDef } from '@tanstack/react-table';
import { NMTable } from '@/components/ui/core/NMTable';

type TBrandProps = {
    brands: IBrand[]
}

const ManageBrands = ({brands}: TBrandProps) => {

     const handleDelete = (data: IBrand) => {
            console.log(data);
          };
        console.log("Hello bat", brands);

        const columns: ColumnDef<IBrand>[] = [
            {
                accessorKey: "name",
                header: () => <div>Brand Name</div>,
                cell: ({ row }) => (
                  <div className="flex items-center space-x-3">
                    <Image
                      src={row.original.logo}
                      alt={row.original.name}
                      width={40}
                      height={40}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="truncate">{row.original.name}</span>
                  </div>
                ),
              },
              {
                accessorKey: "isActive",
                header: () => <div>isActive</div>,
                cell: ({ row }) => (
                  <div>
                    {row.original.isActive ? (
                      <p className="text-green-500 border bg-green-100 w-14 text-center px-1 rounded">
                        True
                      </p>
                    ) : (
                      <p className="text-red-500 border bg-red-100 w-14 text-center px-1 rounded">
                        False
                      </p>
                    )}
                  </div>
                ),
              },
              {
                accessorKey: "action",
                header: () => <div>Action</div>,
                cell: ({ row }) => (
                  <button
                    className="text-red-500"
                    title="Delete"
                    onClick={() => handleDelete(row.original)}
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                ),
              },
              ]
    return (
        <div>
             <div className="flex justify-between">
                <h2 className="text-2xl font-semibold">Manage Brands</h2>
                <CreateBrandModel/>
            </div> 
                <NMTable data={brands} columns={columns} />
        </div>
    );
};

export default ManageBrands;