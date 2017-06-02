package example.chat;
import org.springframework.stereotype.Service;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.support.ChannelInterceptorAdapter;

public class DisconnectionWatcher extends ChannelInterceptorAdapter {

  private UserListService userList;
    DisconnectionWatcher(UserListService userList) {
      this.userList = userList;
    }
    @Override
    public void postSend(Message<?> message, MessageChannel channel, boolean sent) {
         StompHeaderAccessor sha = StompHeaderAccessor.wrap(message);
         if(sha.getCommand() != StompCommand.DISCONNECT) {
            return;
        }
        String sessionId = sha.getSessionId();
        userList.removeFromlist(sessionId);
    }
}
