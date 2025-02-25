"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues,SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import { toast } from "sonner";
import { createBrand } from "@/services/Brand";
import { z } from "zod";

export const BrandSchema = z.object({
  name: z
    .string({ required_error: "Name is required" }),
});


const CreateBrandModel = () => {

      const [imageFiles, setImageFiles] = useState<File[] | []>([]);
      const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  // State to manage form inputs
   const form = useForm({
     resolver: zodResolver(BrandSchema),
   });

   const {
    formState: { isSubmitting },
  } = form;

   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
        console.log(data);
        const formData = new FormData();
        formData.append("data", JSON.stringify(data))
        formData.append("logo", imageFiles[0] as File);

        const res = await createBrand(formData);

        if(res.success){
            toast.success(res?.message)
        }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-lg">Create Brand</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create product Brand</DialogTitle>
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

export default CreateBrandModel;
