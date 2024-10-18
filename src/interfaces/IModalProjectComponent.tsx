interface IModalProjectComponent {
    handleModal: () => void;
    open : boolean;
    title: string;
    about: string;
    categorie: string;
    date: string;
    images: Array<string>;
    icons: Array<React.ReactNode>;
}

export default IModalProjectComponent;