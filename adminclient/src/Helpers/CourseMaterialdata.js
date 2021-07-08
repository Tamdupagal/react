import CourseMaterialActions from "./../Components/Actions/CourseMaterialActions";
import { Button } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

export const CourseMaterialdata = () => {
  const col = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    {
      title: "Material",
      field: "",
      render: (row) => (
        <div>
          <Button variant="outlined" startIcon={<VisibilityOutlinedIcon />}>
            VIEW MATERIAL
          </Button>
        </div>
      ),
    },
    {
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <CourseMaterialActions data={row} />
        </div>
      ),
    },
  ];
};
