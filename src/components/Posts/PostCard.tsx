import "../../App.css";
import { create } from "zustand";
import { postPostAPICall } from "../../API/post";
interface Credentials {
  dataSecret: {
    title?: string;
    content?: string;
  };
  setTitle?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setContent?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const useCredentials = create<Credentials>()((set) => ({
  dataSecret: {
    title: undefined,
    content: undefined,
  },
  setTitle: (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    set((state) => ({
      dataSecret: {
        title: e.target.value,
        content: state.dataSecret.content,
      },
    }));
  },
  setContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    e.stopPropagation();
    set((state) => ({
      dataSecret: {
        title: state.dataSecret.title,
        content: e.target.value,
      },
    }));
  },
}));
const PostCard = () => {
  const { dataSecret, setTitle, setContent } = useCredentials();
  async function onSubmit(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    let res;
    if (dataSecret.content && dataSecret.title) {
      try{
        res = await postPostAPICall(dataSecret.title, dataSecret.content);
      }
      catch(e){
        console.log(e);
      }
      console.log(res);
    } else {
      alert("Incomplete form submission")
    }
  }
  return (
    <div className="p-2 m-2 shadow-sm shadow-lightblue rounded-lg max-w-lg min-w-md bg-gradient-to-r from-lightviolet to-darkviolet text-lightviolet">
      <div className="poppins-regular flex flex-col justify-center">
        <div className="flex justify-center text-3xl">Post</div>
        <div className="m-2 flex justify-left">
          <input
            type="text"
            name="title"
            onChange={setTitle}
            id="title"
            placeholder="Enter title"
            className="overflow-hidden text-ellipsis p-2 shadow-sm shadow-lightblue outline-none rounded-lg bg-darkviolet min-w-full"
          />
        </div>
        <div className="m-2 flex justify-left">
          <textarea
            name="content"
            id="content"
            onChange={setContent}
            placeholder="Enter content"
            rows={10}
            cols={50}
            className="outline-none min-w-full p-2 shadow-sm shadow-lightblue rounded-lg bg-darkviolet "
          ></textarea>
        </div>
        <div className="m-2 flex justify-center">
          <input
            type="submit"
            value="Submit"
            onClick={onSubmit}
            id="submit"
            className="p-2 m-2 bg-darkviolet text-lightviolet rounded-2xl shadow-md shadow-lightblue active:shadow-none"
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
