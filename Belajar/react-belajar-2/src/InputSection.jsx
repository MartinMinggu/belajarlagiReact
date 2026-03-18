
import { forwardRef } from "react";

const InputSection = forwardRef((props, ref) => {
    return <div>
        <input type="text" ref={ref} />
    </div>

});
export default InputSection;