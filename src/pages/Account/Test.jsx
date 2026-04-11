import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
// Import icons from react-icons
import { BsFileText, BsBoxSeam, BsTruck, BsHandThumbsUp } from "react-icons/bs";

// 1. تخصيص الخط الواصل (The Line)
const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#191C1F", // اللون الأسود للخط النشط
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#191C1F", // اللون الأسود للخط المكتمل
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 4, // تخانة الخط زي Figma
    border: 0,
    backgroundColor: "#E4E7E9", // اللون الرمادي للخط غير النشط
    borderRadius: 1,
  },
}));

// 2. تخصيص شكل الدائرة اللي شايلة الأيقونة
const ColorlibStepIconRoot = styled("div")(({ ownerState }) => ({
  backgroundColor: "#fff",
  zIndex: 1,
  color: "#929FA5",
  width: 48,
  height: 48,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid #E4E7E9",
  // لو الخطوة نشطة أو مكتملة بنغير اللون للأسود
  ...((ownerState.active || ownerState.completed) && {
    backgroundColor: "#191C1F",
    color: "#fff",
    border: "2px solid #191C1F",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, icon } = props;

  // ربط رقم الأيقونة بالـ Component الفعلي
  const icons = {
    1: <BsFileText size={22} />,
    2: <BsBoxSeam size={22} />,
    3: <BsTruck size={22} />,
    4: <BsHandThumbsUp size={22} />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }}>
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ["ORDER PLACED", "PACKAGING", "ON THE ROAD", "DELIVERED"];

export default function OrderStatusStepper() {
  return (
    <div className="w-full py-10 bg-white">
      <Stepper
        alternativeLabel
        activeStep={1} // دي اللي بتتحكم إحنا في أنهي خطوة (0, 1, 2, 3)
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <span className="font-bold text-[11px] text-[#191C1F] tracking-wide mt-2 block">
                {label}
              </span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
