import { Formik, Form } from "formik";

export default function MyForm({
  children,
  className,
  initialValues,
  validationSchema,
  onSubmit,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <Form className={`w-full ${className || "flex flex-col gap-4"}`}>
          {typeof children === "function" ? children(formikProps) : children}
        </Form>
      )}
    </Formik>
  );
}
