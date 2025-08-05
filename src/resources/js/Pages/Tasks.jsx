import withAdminLayout from "@/Layouts/with-admin-layout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


function Tasks() {
    return (
        <>
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
                <Button>Add Task</Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Design Landing Page</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm mb-2">
                            Create a modern, responsive landing page for the new product.
                        </p>
                        <Button size="sm" variant="outline">View</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Fix Login Bug</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm mb-2">
                            Some users report not being able to log in—investigate and resolve.
                        </p>
                        <Button size="sm" variant="outline">View</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Write Documentation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm mb-2">
                            Write clear setup instructions and API usage docs.
                        </p>
                        <Button size="sm" variant="outline">View</Button>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

Tasks.layout = withAdminLayout;

export default Tasks;
