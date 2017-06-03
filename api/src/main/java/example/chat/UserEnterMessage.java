package example.chat;

public class UserEnterMessage {

    private String userName;
    public UserEnterMessage() {
    }
    public UserEnterMessage(String userName) {
        this.userName = userName;
    }
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
