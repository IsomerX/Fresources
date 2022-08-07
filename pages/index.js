import PdfViewer from '../components/PdfViewer'

export default function Home() {
    return (
        <div className="w-1/2 h-screen mx-auto overflow-y-scroll ">
            <PdfViewer link="https://data-storage.sgp1.digitaloceanspaces.com/H.C.%20TNEJA%201-500%20(1).pdf" />
        </div>
    )
}
