import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

function useSingleMovie() {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (id: string) => {
    try {
      setIsDeleting(true);
      const response = await fetch(`/api/delete?id=${id}`, {
        method: "GET",
      });

      if (response.ok) {
        toast.success("Successfully Deleted");
        router.push("/");
      } else {
        console.error(`Failed to delete`);
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(`Error deleting movie: ${error}`);
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    isDeleting,
    handleDelete,
  };
}

export default useSingleMovie;
