package example.chat;

public class Message {

    private String senderName;
    private String message;

    public Message(String message) {
      this.message = message;
    }

    public Message(String senderName, String message) {
        this.senderName = senderName;
        this.message = message;
    }
    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }
    public String getMessage () {
      return message;
    }
    public void setMessage (String message) {
      this.message = message;
    }
}
