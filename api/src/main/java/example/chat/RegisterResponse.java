package example.chat;
import java.util.ArrayList;
public class RegisterResponse {

    private String userName;
    private boolean entered;
    private ArrayList<String> userList;

    public RegisterResponse(boolean entered, RegisterPayload payload) {
        this.entered = entered;
        this.userName = payload.getName();
    }
    public RegisterResponse(boolean entered, RegisterPayload payload, ArrayList<String> userList) {
        this.entered = entered;
        this.userName = payload.getName();
        this.userList = userList;
    }
    public String getSuccessMessage() {
      if (!this.entered) {
        return "";
      }
      return "Hello " + userName + "! Glad you are here";
    }
    public String getErrorMessage() {
      if (this.entered) {
        return "";
      }
      return "The userName " + userName + " is already taken, choose another";
    }
    public boolean getEntered() {
      return this.entered;
    }
    public ArrayList<String> getUserList() {
      return this.userList;
    }

}
