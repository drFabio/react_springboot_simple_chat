package example.chat;
import org.springframework.stereotype.Service;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.context.event.EventListener;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

public class DisconnectionWatcher {
  private SimpMessagingTemplate messagingTemplate;

  private UserListService userList;
    DisconnectionWatcher(UserListService userList, SimpMessagingTemplate messagingTemplate) {
      this.userList = userList;
      this.messagingTemplate = messagingTemplate;
    }
    @EventListener
    private void handleSessionDisconnect(SessionDisconnectEvent event) {
      String sessionId = event.getSessionId();
      String userName = this.userList.getUserName(sessionId);
      userList.removeFromlist(sessionId);
      this.messagingTemplate.convertAndSend("/topic/userLeft", new UserLeftMessage(userName));
    }
}
