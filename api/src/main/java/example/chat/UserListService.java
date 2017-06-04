package example.chat;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import org.springframework.stereotype.Service;

@Service
public class UserListService {
  private final Map<String, String> sessionIdNameMap = new HashMap<String, String>();

  public boolean addToList(String sessionId, RegisterPayload payload) {
    String name = payload.getName();
    if (sessionIdNameMap.containsValue(name)) {
      if (sessionIdNameMap.containsKey(sessionId)){
        if (getUserName(sessionId) != name) {
          return false;
        }
      } else {
        return false;
      }
    }
    sessionIdNameMap.put(sessionId, name);
    return true;
  }
  public void removeFromlist(String sessionId) {
    sessionIdNameMap.remove(sessionId);
  }
  public String getUserName (String sessionId) {
    return sessionIdNameMap.get(sessionId);
  }
  public ArrayList<String> getUserList() {
    return new ArrayList<String>(sessionIdNameMap.values());
  }
}
