import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { Button } from "@material-ui/core";

function ExportData({ Data, fileName, className }) {
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = (Data, fileName) => {
        const modifiedData = Data.map((book) => ({
            Title: book.title,
            Author: book.author.join(", "),
            Publisher: book.publisher,
            Genre: book.genre.join(", "),
            Status: book.status,
            Description: book.description,
        }));
        const ws = XLSX.utils.json_to_sheet(modifiedData);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    return (
        <Button
            onClick={(e) => exportToCSV(Data, fileName)}
            variant="contained"
            className={className}
        >
            Export Excel
        </Button>
    );
}

export default ExportData;
