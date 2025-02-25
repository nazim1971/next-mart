"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues,SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { categorySchema } from "./categoryValidaation";
import { useState } from "react";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import { createCategory } from "@/services/Category";
import { toast } from "sonner";

const CreateCategoryModel = () => {
  const [isModalOpen, setModalOpen] = useState(false);
      const [imageFiles, setImageFiles] = useState<File[] | []>([]);
      const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  // State to manage form inputs
   const form = useForm({
     resolver: zodResolver(categorySchema),
   });

   const {
    formState: { isSubmitting },
  } = form;

   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
        console.log(data);
        const formData = new FormData();
        formData.append("data", JSON.stringify(data))
        formData.append("icon", imageFiles[0] as File);

        const res = await createCategory(formData);

        if(res.success){
          setModalOpen(false);
            toast.success(res?.message)
            
        }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={setModalOpen}  >
        <DialogTrigger  asChild>
          <Button className="text-lg">Create Category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create product category</DialogTitle>
          </DialogHeader>
          <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <div className="flex justify-between mt-5">
            
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-36 w-64"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            {imagePreview.length > 0 ? (
              <ImagePreviewer
                setImageFiles={setImageFiles}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
                className="mt-8"
              />
            ) : (
              <div className="mt-8">
                <NMImageUploader
                  setImageFiles={setImageFiles}
                  setImagePreview={setImagePreview}
                  label="Upload Icon"
                />
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="mt-5 w-full"
          >
            {isSubmitting ? "Submitting...." : "Submit"}
           
          </Button>
        </form>
      </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateCategoryModel;
