import { useDisclosure } from "@chakra-ui/react";
import produce from "immer";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

export interface TransactionProps {
  title: string;
  price: number;
  category: string;
  create_at: string;
  type: string;
}

interface ModalContextProps extends TransactionProps {
  transactions: TransactionProps[];
  isOpen: boolean;
  setTransactions: (transactions: TransactionProps[]) => void;
  setTitle: (value: string) => void;
  setCategory: (value: string) => void;
  setPrice: (value: number) => void;
  setType: (value: string) => void;
  onOpen: () => void;
  onClose: () => void;
  crateTransaction: () => void;
}

interface ModalContextProviderProps {
  children: ReactNode;
}

const ModalContext = createContext({} as ModalContextProps);

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("deposit");

  const create_at = new Intl.DateTimeFormat("pt-BR", {}).format(new Date());

  function crateTransaction() {
    if (title === "" || category === "" || price === 0 || type === "") {
      toast("Preencha todos os dados!", {
        icon: "⚠️",
      });

      return;
    } else {
      const newTransaction = {
        title,
        price,
        category,
        type,
        create_at,
      };

      const newTransactions = produce(transactions, (draft) => {
        draft.push(newTransaction);
      });

      toast.success("Transação adicionada!");

      onClose();
      setTitle("");
      setCategory("");
      setPrice(0);
      setType("");

      setTransactions(newTransactions);

      localStorage.setItem(
        "client_transactions",
        JSON.stringify(newTransactions)
      );
    }
  }

  return (
    <ModalContext.Provider
      value={{
        onOpen,
        isOpen,
        onClose,
        category,
        transactions,
        title,
        price,
        create_at,
        setCategory,
        setPrice,
        setTitle,
        setType,
        type,
        crateTransaction,
        setTransactions,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  return context;
}
