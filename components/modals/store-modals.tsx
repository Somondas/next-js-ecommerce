"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import React from "react";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

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
