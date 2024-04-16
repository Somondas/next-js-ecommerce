"use client";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";
import React from "react";
import * as z from "zod";

interface SettingsFormProps {
  initialData: Store;
}
const formSchema = z.object({
  name: z.string().min(1),
});
type SettingsFormValues = z.infer<typeof formSchema>;
const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  const storeModal = useStoreModal();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage your store" />
        {/* <Button onClick={() => storeModal.onOpen()}>Create store</Button> */}
        <Button variant={"destructive"} size={"icon"} onClick={() => {}}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
    </>
  );
};

export default SettingsForm;
