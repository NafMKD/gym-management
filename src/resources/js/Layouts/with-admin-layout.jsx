import AdminLayout from "@/Layouts/admin-layout";

export default function withAdminLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
}