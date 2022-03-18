import { ImageSource } from "../models/image";
declare interface FileOption {
    text: string;
    value: string;
}
declare interface ImagePreviewData {
    imgs: string[];
    visible: boolean;
    index: number;
    filetype: string;
    options: Array<FileOption>;
}
declare const _default: import("vue").DefineComponent<{
    images: {
        type: () => Array<ImageSource>;
        required: true;
    };
}, unknown, ImagePreviewData, {}, {
    createObjectURL(image: ImageSource): string;
    safeImage(file: any, format: string): Promise<Uint8Array>;
    downloadZip(): Promise<void>;
    show(): void;
    showImg(index: any): void;
    handleHide(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    images: {
        type: () => Array<ImageSource>;
        required: true;
    };
}>>, {}>;
export default _default;
//# sourceMappingURL=ImagePreview.vue.d.ts.map