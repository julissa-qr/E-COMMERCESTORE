import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { UseControllerProps, } from "react-hook-form";
import { Product } from "../../models/product";

interface Props extends UseControllerProps {
    label: string;
    //items: string[];
    //products: Product[];
}

export default function CheckboxTypes(props: Props) {
   // const { fieldState, field } = useController({ ...props, defaultValue: '' });
    return (
        <FormControl fullWidth>
            <InputLabel>Types</InputLabel>
            <Select
                label="Types"
            >
                <MenuItem value={1}>T-shirt</MenuItem>
                <MenuItem value={2}>Sweater</MenuItem>
                <MenuItem value={3}>Boots</MenuItem>
                <MenuItem value={4}>Shoes</MenuItem>
            </Select>
        </FormControl>
    )
}