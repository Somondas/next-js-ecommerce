"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStoreModal } from "@/hooks/use-store-modal";
import React from "react";
import { Modal } from "@/components/ui/modal";

const formSchema = z.object({
  name: z.string().min(3),
  // storeAddress: z.string().min(3),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      // storeAddress: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Modal
      title="Create Store"
      description="Add a new store to your account"
      isOpen={storeModal.isOpen}
      onclose={storeModal.onClose}
    >
      Feture create Store Form
    </Modal>
  );
};
