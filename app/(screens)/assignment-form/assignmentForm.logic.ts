import { useRouter } from "expo-router";
import { useAssignmentForm } from ".";

export const AssignmentFormFunction = () => {
    const {setTitleForm, setDetailForm, setIsAlert, setIsAllDay, isAlert, isAllDay} = useAssignmentForm();
    const router = useRouter();
      const onBack = () => {
        router.back();
      };
    
      
      const onChangeTitleForm = (_text: string) => {
        setTitleForm(_text);
      };
    
      
      const onChangeDetailForm = (_text: string) => {
        setDetailForm(_text)
      }
    
      const toggleSwitch = () => setIsAllDay(!isAllDay);
      const alertSwitch = () => setIsAlert(!isAlert);

      return {
        onBack,
        onChangeTitleForm,
        onChangeDetailForm,
        toggleSwitch,
        alertSwitch
      }
}