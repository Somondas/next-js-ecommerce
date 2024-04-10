"use client";
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

import React from "react";

const SetupPage = () => {
  return (
    <div>
      <Modal title="Test" description="test desc" isOpen onclose={() => {}}>
        Clildren
      </Modal>
    </div>
  );
};

export default SetupPage;
