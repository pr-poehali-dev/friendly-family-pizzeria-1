import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface OrderDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderDialog = ({ isOpen, onClose }: OrderDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Заказ оформлен!</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center py-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Icon name="Check" size={48} className="text-green-600" />
          </div>
          <p className="text-center text-lg mb-2">Спасибо за ваш заказ!</p>
          <p className="text-center text-muted-foreground mb-6">
            Мы свяжемся с вами в ближайшее время для подтверждения.
          </p>
          <Button onClick={onClose} className="w-full">
            Закрыть
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
