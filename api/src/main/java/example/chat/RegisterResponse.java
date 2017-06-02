package example.chat;

public class RegisterResponse {

    private String userName;
    private boolean entered;
    public RegisterResponse(boolean entered, RegisterPayload payload) {
        this.entered = entered;
        this.userName = payload.getName();
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

}
