import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { UseControllerProps, } from "react-hook-form";

interface Props extends UseControllerProps {
    label: string;
    //items: string[];
}

export default function CheckboxBrands(props: Props) {
   // const { fieldState, field } = useController({ ...props, defaultValue: '' });
    return (
        <FormControl fullWidth>
            <InputLabel>Brands</InputLabel>
            <Select
                label="Brands"
            >
                <MenuItem value={1}>VueJS</MenuItem>
                <MenuItem value={2}>Angular</MenuItem>
                <MenuItem value={3}>React</MenuItem>
                <MenuItem value={4}>Redux</MenuItem>
                <MenuItem value={5}>Node</MenuItem>
                
            </Select>
        </FormControl>
    )
}