export const DOB_convertor = (date) => {
    const date1 = String(new Date(date));
    return (
        date1.slice(0, 10)
    )
}