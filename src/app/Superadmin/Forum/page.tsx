"use client";

import Grid from "@/components/super admin/forum/grid";
import Konten from "@/components/super admin/forum/konten";

function Forum() {
  return (
    <div className="overflow-x-hidden min-h-screen">
      <Grid />
      <Konten />
    </div>
  );
}

export default Forum;
