import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PdfViewer(props) {
    const defaultLayoutPluginInstance = defaultLayoutPlugin()
    return <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
        <Viewer fileUrl={props.link} plugins={[defaultLayoutPluginInstance]} theme = "dark"></Viewer>
    </Worker>
}
